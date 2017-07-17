# ember-cli-dropcap

A simple Ember wrapper for [Adobe dropcap.js][dropcap].

## Installation

    ember install ember-cli-dropcap
    
## Usage

### Rendering a drop cap

    {{#drop-cap heightInLines=3}}L{{/drop-cap}}orem ipsum dolor sit amet
    
### Attributes

The component supports two attributes:

* `heightInLines`
* `baselinePos`

These attributes are the same as the parameters for [`Dropcap.layout()`][layout]

[dropcap]: https://github.com/adobe-webplatform/dropcap.js
[layout]: https://github.com/adobe-webplatform/dropcap.js#dropcaplayoutdropcapref-heightinlines-baselinepos

## Limitations

There is currently no clean way to set properties on `Dropcap.options` without referencing the global `Dropcap` object.
