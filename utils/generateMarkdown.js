// function to generate markdown for README
function generateMarkdown(data) {
  return `# Title: 
  ${data.title}
  # Installed With:
  # ${data.installed}
  # ${data.usage}
  # ${data.credits}
  # ${data.license}
  # ${data.author}
`;
}

module.exports = generateMarkdown;
