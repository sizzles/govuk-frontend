<div class="govuk-o-width-container">

<div class="govuk-o-main-wrapper">

# Tag

## Introduction

Phase tags are mostly used inside phase banners as an indication of the state of a project. It’s possible to use them outside phase banners, for example as part of a service header.

## Guidance

More information about when to use tag can be found on [GOV.UK Design System](http://www.linktodesignsystem.com/tag "Link to read guidance on the use of tag on Gov.uk Design system website")

## Quick start examples

### Component default

[Preview the tag component](http://govuk-frontend-review.herokuapp.com/components/tag/preview)

#### Markup

    <strong class="govuk-c-tag">
      alpha
    </strong>

#### Macro

    {{ govukTag({
      "text": "alpha"
    }) }}

### Tag--with-html

[Preview the tag--with-html variant](http://govuk-frontend-review.herokuapp.com/components/tag/with-html/preview)

#### Markup

    <strong class="govuk-c-tag">
      <i>alpha</i>
    </strong>

#### Macro

    {{ govukTag({
      "html": "<i>alpha</i>"
    }) }}

### Tag--inactive

[Preview the tag--inactive variant](http://govuk-frontend-review.herokuapp.com/components/tag/inactive/preview)

#### Markup

    <strong class="govuk-c-tag govuk-c-tag--inactive">
      alpha
    </strong>

#### Macro

    {{ govukTag({
      "text": "alpha",
      "classes": "govuk-c-tag--inactive"
    }) }}

## Dependencies

To consume the tag component you must be running npm version 5 or above.

## Installation

    npm install --save @govuk-frontend/tag

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

<th class="govuk-c-table__header" scope="row">classes</th>

<td class="govuk-c-table__cell ">string</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Optional additional classes</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">text</th>

<td class="govuk-c-table__cell ">string</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Text for the tag component.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">html</th>

<td class="govuk-c-table__cell ">string</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">HTML to use within for the tag component. If this is provided, the text argument will be ignored.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">attributes</th>

<td class="govuk-c-table__cell ">object</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Any extra HTML attributes (for example data attributes) to add to the tag container.</td>

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

    npm outdated @govuk-frontend/tag

To update the latest version run:

    npm update @govuk-frontend/tag

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