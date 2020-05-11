# Tiros website

url: tiros.ai
netlify hosting: https://tiros-website.netlify.app

### Getting started

Install Gatsby cli globally.
```sh
npm install -g gatsby-cli
```

Clone repository and install local dependencies. 
```sh
npm install
```

start the development server:
```sh
gatsby develop
```

At the project root, compile your application for deployment:
```sh
gatsby build
```

Clean the cache to fix certain errors - run the clean command before starting the dev server:
```sh
gatsby clean
```

At the project root, serve the production build of your site:
```sh
gatsby serve
```

### Styles

This starter uses [styled-components](https://www.styled-components.com/). The theme file contains the base styles `src/styles/theme.js` and the global styles file contains basic element styles and a style reset `src/styles/GlobalStyles.js`.


### Collect emails with Netlify Forms

[Form Handling with Gatsby.js V2 and Netlify](https://codebushi.com/form-handling-gatsby-netlify/)


### Netlify form usage example

In `header.js` replacing the existing `<HeaderForm>...</HeaderForm>` components with the following should provide a working example once your site is deployed: 
```
<HeaderForm
 name="early-access"
 method="post"
 data-netlify-honeypot="bot-field"
 data-netlify="true"
>
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="early-access" />
  <HeaderInput
   type="email"
   placeholder="Your email"
   name="email"
   id="email"
   required
  />
  <HeaderButton>Early access</HeaderButton>
</HeaderForm>
```
