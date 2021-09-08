// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `https://img.shields.io/badge/License${license}-blue.svg`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "MIT") {
    return `https://api.github.com/licenses/${license}`
  }
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `https://api.github.com/licenses/${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
  [Title](#Title)
  [Description](#Description)
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Github](#Github)
  [E-mail](#E-mail)

  ## Title
  ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseLink(data)}

  ## Github
  ${data.github}

  ## E-mail
  ${data.email}`;
}

module.exports = generateMarkdown;
