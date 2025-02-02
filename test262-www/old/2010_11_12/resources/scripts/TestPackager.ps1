param($rootDir, $webRootPath, $excludeListFilename)

$chapters = get-childitem $rootDir | where-object{$_.mode -match "d"}
$template='
 <testCollection>
  <!-- adding section element if in the future we want to store information about the -->
  <!-- spec structure in this file, for now the section structure is defined in the   -->
  <!-- sections.js file                                                               -->
  </testCollection>'
$templateMasterList='
  <testSuite numTests="">
  </testSuite>'
  
$masterList=[xml]$templateMasterList
$numTests=0
$utf8=New-Object System.Text.UTF8Encoding 
[xml]$excludeList= get-content $excludeListFilename

foreach($chapter in $chapters)
{
    $testsList = [xml] $template
    $sectionEl = $testsList.CreateElement("section")
    $sectionAttr=$testsList.CreateAttribute("name")
    $sectionEl.Attributes.Append($sectionAttr)
    $numTestAttr=$testsList.CreateAttribute("numTests") 
    $sectionEl.Attributes.Append($numTestAttr)
    
    $testEl= $testsList.CreateElement("test")
    $testAttr=$testsList.CreateAttribute("id")
    $testEl.Attributes.Append($testAttr)
    $newSection=$sectionEl.clone()
    $newSection.GetAttributeNode("name").innerText="Chapter - "+$Chapter.Name
    $sourceFiles = get-childitem $chapter.FullName -include *.js -recurse | where-object{$_.mode -notmatch "d"}
    if($sourceFiles -ne $NULL)
    {
        $excluded=0
        foreach($test in $sourceFiles){
        $testName=$test.Name.Remove($test.Name.Length-3)
         if(($testName.length -gt 0) -and ($excludeList.excludeList.SelectNodes("test[@id ='"+$testName+"']").Count -eq 0))
         {
            $newTestEl=$testEl.clone()
            $newTestEl.GetAttributeNode("id").innerText=$testName

            $scriptCode=Get-Content $test.FullName

            $scriptCodeContent=""
            foreach($line in $scriptCode){
            $scriptCodeContent+=$line+"`r`n"
            }
            
            # remove comments
            $hs5HarnessPos=$scriptCodeContent.IndexOf("ES5Harness")
            $comments=$scriptCodeContent.Substring(0,$hs5HarnessPos) 
            $comments=$comments -replace "(//.*\n|/\*(.|\n)*?\*/)"
            $scriptCodeContent=$scriptCodeContent.Substring($hs5HarnessPos)

            $scriptCodeContent=[Convert]::ToBase64String($utf8.GetBytes($comments+$scriptCodeContent))
            $cdata=$testsList.CreateCDataSection($scriptCodeContent)
            $newTestEl.AppendChild($cdata)
            $newSection.AppendChild($newTestel)
          }
           else
            {
             $excluded++
           }

         }
        $newSection.numTests=($sourceFiles.Length-$excluded ).ToString()
        $testsList.testCollection.AppendChild($newSection)
        $baseDir=$chapters[0].Parent.FullName
        $testGroupPathname=$baseDir+"\"+$chapter.Name+".xml"
        $testsList.Save($testGroupPathname)
        $testGroupEl=$masterList.CreateElement("testGroup")
        $testGroupEl.innerText=$webRootPath+$chapter.Name+".xml"
        $masterList["testSuite"].AppendChild($testGroupEl)
        
        $numTests+= $sourceFiles.Length-$excluded

    }
}
$masterList["testSuite"].GetAttributeNode("numTests").innerText=$numTests
$masterList.Save($baseDir+"\testcaseslist.xml")
