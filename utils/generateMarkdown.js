// function to generate markdown for 

function renderBadge(license) {
        
 if (license == 'apache'){
    console.log ('apache')
return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

}else if(license == 'Boost'){
return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'

}else if (license == 'BSD'){
return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'

}else if(license == 'BSD 2-Clause License'){
return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'

}else {
return
}
}

function generateMarkDown(data) {
  console.log('data', data.license)

  return (
      `
# Title: 
${data.title}
# Installed With:
${data.installed}
#🏆 We Used 
${data.usage}
# The Credit goes
to
${data.credits} 
# The license we used is
${data.license}
${renderBadge(data.license)}

# The author is 
${data.author}
`


  
  )
}

module.exports = generateMarkDown;
