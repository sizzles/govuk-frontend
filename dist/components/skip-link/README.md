<div class="govuk-o-width-container">

<div class="govuk-o-main-wrapper">

# Skip link

## Introduction

Skip link component. Make skip links visible when they are tabbed to. You'll need to add correct id to your main content area, to ensure the skip link will work.

## Guidance

More information about when to use skip-link can be found on [GOV.UK Design System](http://www.linktodesignsystem.com/skip-link "Link to read guidance on the use of skip-link on Gov.uk Design system website")

## Quick start examples

### Component default

[Preview the skip-link component](http://govuk-frontend-review.herokuapp.com/components/skip-link/preview)

#### Markup

    <a href="#content" class="govuk-c-skip-link">Skip to main content</a>

#### Macro

    {{ govukSkipLink({
      "text": "Skip to main content",
      "href": "#content"
    }) }}

## Dependencies

To consume the skip-link component you must be running npm version 5 or above.

## Installation

    npm install --save @govuk-frontend/skip-link

## Requirements

### Build tool configuration

When compiling the Sass files you'll need to define includePaths to reference the node_modules directory. Below is a sample configuration using gulp

<pre>  `.pipe(sass({
        includePaths: 'node_modules/'
    }))` 
  </pre>

### Static asset path configuration

To show the button image you need to configure your app to show these assets. Below is a sample configuration using Express js:

<pre>  `app.use('/public', express.static(path.join(__dirname, '/node_modules/@govuk-frontend/icons')))` 
  </pre>

## Component arguments

If you are using Nunjucks,then macros take the following arguments

<div>

<table class="govuk-c-table">

<thead class="govuk-c-table__head">

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="col">Name</th>

<th class="govuk-c-table__header" scope="col">Type</th>

<th class="govuk-c-table__header" scope="col">Required</th>

<th class="govuk-c-table__header" scope="col">Description</th>

</tr>

</thead>

<tbody class="govuk-c-table__body">

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">href</th>

<td class="govuk-c-table__cell ">string</td>

<td class="govuk-c-table__cell ">Yes</td>

<td class="govuk-c-table__cell ">The value of the skip link href attribute. Defaults to #content</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">text</th>

<td class="govuk-c-table__cell ">string</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Text to use within the skip link.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">html</th>

<td class="govuk-c-table__cell ">string</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">HTML to use within the skip link. If this is provided, the text argument will be ignored.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">classes</th>

<td class="govuk-c-table__cell ">string</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Optional additional classes for the skip link.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">attributes</th>

<td class="govuk-c-table__cell ">object</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Any extra HTML attributes (for example data attributes) to add to the skip link.</td>

</tr>

</tbody>

</table>

</div>

### Setting up Nunjucks views and paths

Below is an example setup using express configure views:

<pre>  `nunjucks.configure('node_modules/@govuk-frontend`, {
    autoescape: true,
    cache: false,
    express: app
  })` 
  </pre>

## Getting updates

To check whether you have the latest version of the button run:

    npm outdated @govuk-frontend/skip-link

To update the latest version run:

    npm update @govuk-frontend/skip-link

## Contribution

Guidelines can be found at [on our Github repository.](https://github.com/alphagov/govuk-frontend/blob/master/CONTRIBUTING.md "link to contributing guidelines on our github repository")

## Acknowledgements/credits

*   GDS developers
*   Jani Kraner
*   Gemma Leigh

## License

MIT

</div>

</div>