# CTA Aggregator JavaScript example

This is a simple example showing fetching and rendering of CTA Aggregator events and calls to action.

You can see a running version at https://ragtagteam.github.io/cta-aggregator-js/.

### Requirements

You'll need [node and npm](https://nodejs.org/en/) installed on your machine for this example.

### Setup

After cloning this repo, run `npm install` to install dependencies.

### Building

Run `npm run build` to generate the `dist/bundle.js` file.

### Running

Now you can open `index.html` in your browser (no web server necessary).

### Development

If you'd like to edit the code and see changes immediately, you can run `npm run dev` while you make your edits, then just reload `index.html` to see your new code.

## Notes

This is a simple illustrative example. You'll want to consider the following if you're showing CTA data on a production website:
- Proper error handling
- Compatibility for older browsers (using [Babel](https://babeljs.io/) or similar)