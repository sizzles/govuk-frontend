<div class="govuk-o-width-container">

<div class="govuk-o-main-wrapper">

# Table

## Introduction

Table description.

## Guidance

More information about when to use table can be found on [GOV.UK Design System](http://www.linktodesignsystem.com/table "Link to read guidance on the use of table on Gov.uk Design system website")

## Quick start examples

### Component default

[Preview the table component](http://govuk-frontend-review.herokuapp.com/components/table/preview)

#### Markup

    <table class="govuk-c-table">

      <tbody class="govuk-c-table__body">

        <tr class="govuk-c-table__row">

          <td class="govuk-c-table__cell" scope="row">January</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£85</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£95</td>

        </tr>

        <tr class="govuk-c-table__row">

          <td class="govuk-c-table__cell" scope="row">February</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£75</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£55</td>

        </tr>

        <tr class="govuk-c-table__row">

          <td class="govuk-c-table__cell" scope="row">March</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£165</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£125</td>

        </tr>

      </tbody>
    </table>

#### Macro

    {{ govukTable({
      "rows": [
        [
          {
            "text": "January"
          },
          {
            "text": "£85",
            "format": "numeric"
          },
          {
            "text": "£95",
            "format": "numeric"
          }
        ],
        [
          {
            "text": "February"
          },
          {
            "text": "£75",
            "format": "numeric"
          },
          {
            "text": "£55",
            "format": "numeric"
          }
        ],
        [
          {
            "text": "March"
          },
          {
            "text": "£165",
            "format": "numeric"
          },
          {
            "text": "£125",
            "format": "numeric"
          }
        ]
      ]
    }) }}

### Table--table-with-head

[Preview the table--table-with-head variant](http://govuk-frontend-review.herokuapp.com/components/table/table-with-head/preview)

#### Markup

    <table class="govuk-c-table">

      <thead class="govuk-c-table__head">
        <tr class="govuk-c-table__row">

          <th class="govuk-c-table__header" scope="col">Month you apply</th>

          <th class="govuk-c-table__header govuk-c-table__header--numeric" scope="col">Rate for bicycles</th>

          <th class="govuk-c-table__header govuk-c-table__header--numeric" scope="col">Rate for vehicles</th>

        </tr>
      </thead>

      <tbody class="govuk-c-table__body">

        <tr class="govuk-c-table__row">

          <td class="govuk-c-table__cell" scope="row">January</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£85</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£95</td>

        </tr>

        <tr class="govuk-c-table__row">

          <td class="govuk-c-table__cell" scope="row">February</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£75</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£55</td>

        </tr>

        <tr class="govuk-c-table__row">

          <td class="govuk-c-table__cell" scope="row">March</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£165</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£125</td>

        </tr>

      </tbody>
    </table>

#### Macro

    {{ govukTable({
      "head": [
        {
          "text": "Month you apply"
        },
        {
          "text": "Rate for bicycles",
          "format": "numeric"
        },
        {
          "text": "Rate for vehicles",
          "format": "numeric"
        }
      ],
      "rows": [
        [
          {
            "text": "January"
          },
          {
            "text": "£85",
            "format": "numeric"
          },
          {
            "text": "£95",
            "format": "numeric"
          }
        ],
        [
          {
            "text": "February"
          },
          {
            "text": "£75",
            "format": "numeric"
          },
          {
            "text": "£55",
            "format": "numeric"
          }
        ],
        [
          {
            "text": "March"
          },
          {
            "text": "£165",
            "format": "numeric"
          },
          {
            "text": "£125",
            "format": "numeric"
          }
        ]
      ]
    }) }}

### Table--table-with-caption-and-head

[Preview the table--table-with-caption-and-head variant](http://govuk-frontend-review.herokuapp.com/components/table/table-with-caption-and-head/preview)

#### Markup

    <table class="govuk-c-table">

      <caption class="govuk-c-table__caption small">Caption 1 : Months and rates</caption>

      <thead class="govuk-c-table__head">
        <tr class="govuk-c-table__row">

          <th class="govuk-c-table__header" scope="col">Month you apply</th>

          <th class="govuk-c-table__header govuk-c-table__header--numeric" scope="col">Rate for bicycles</th>

          <th class="govuk-c-table__header govuk-c-table__header--numeric" scope="col">Rate for vehicles</th>

        </tr>
      </thead>

      <tbody class="govuk-c-table__body">

        <tr class="govuk-c-table__row">

          <th class="govuk-c-table__header" scope="row">January</th>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£85</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£95</td>

        </tr>

        <tr class="govuk-c-table__row">

          <th class="govuk-c-table__header" scope="row">February</th>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£75</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£55</td>

        </tr>

        <tr class="govuk-c-table__row">

          <th class="govuk-c-table__header" scope="row">March</th>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£165</td>

          <td class="govuk-c-table__cell govuk-c-table__cell--numeric">£125</td>

        </tr>

      </tbody>
    </table>

#### Macro

    {{ govukTable({
      "caption": "Caption 1 : Months and rates",
      "captionSize": "small",
      "firstCellIsHeader": true,
      "head": [
        {
          "text": "Month you apply"
        },
        {
          "text": "Rate for bicycles",
          "format": "numeric"
        },
        {
          "text": "Rate for vehicles",
          "format": "numeric"
        }
      ],
      "rows": [
        [
          {
            "text": "January"
          },
          {
            "text": "£85",
            "format": "numeric"
          },
          {
            "text": "£95",
            "format": "numeric"
          }
        ],
        [
          {
            "text": "February"
          },
          {
            "text": "£75",
            "format": "numeric"
          },
          {
            "text": "£55",
            "format": "numeric"
          }
        ],
        [
          {
            "text": "March"
          },
          {
            "text": "£165",
            "format": "numeric"
          },
          {
            "text": "£125",
            "format": "numeric"
          }
        ]
      ]
    }) }}

## Dependencies

To consume the table component you must be running npm version 5 or above.

## Installation

    npm install --save @govuk-frontend/table

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

<th class="govuk-c-table__header" scope="col">format</th>

<th class="govuk-c-table__header" scope="col">Required</th>

<th class="govuk-c-table__header" scope="col">Description</th>

</tr>

</thead>

<tbody class="govuk-c-table__body">

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">classes</th>

<td class="govuk-c-table__cell ">string</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Optional additional classes.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">caption</th>

<td class="govuk-c-table__cell ">string</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Optional caption text.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">captionSize</th>

<td class="govuk-c-table__cell ">string</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Optional caption text size. Class should correspond to the available heading classes.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">firstCellIsHeader</th>

<td class="govuk-c-table__cell ">boolean</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">If set to true, first cell in table row will be a TH instead of a TD.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">head</th>

<td class="govuk-c-table__cell ">array</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Optional array of table head cells</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">rows</th>

<td class="govuk-c-table__cell ">array</td>

<td class="govuk-c-table__cell ">Yes</td>

<td class="govuk-c-table__cell ">Array of table rows and cells.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">text</th>

<td class="govuk-c-table__cell ">string</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Text for cells in table head and rows.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">html</th>

<td class="govuk-c-table__cell ">string</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">HTML for cells in table head and rows. If this is specified, the text argument will be ignored.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">format</th>

<td class="govuk-c-table__cell ">string</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Specify format of any cell. Currently we only use "numeric".</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">colspan</th>

<td class="govuk-c-table__cell ">number</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Specify how many columns the cell extends.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">rowspan</th>

<td class="govuk-c-table__cell ">number</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Specify how many rows the cell extends.</td>

</tr>

<tr class="govuk-c-table__row">

<th class="govuk-c-table__header" scope="row">attributes</th>

<td class="govuk-c-table__cell ">object</td>

<td class="govuk-c-table__cell ">No</td>

<td class="govuk-c-table__cell ">Any extra HTML attributes (for example data attributes) to add to the table container.</td>

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

    npm outdated @govuk-frontend/table

To update the latest version run:

    npm update @govuk-frontend/table

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