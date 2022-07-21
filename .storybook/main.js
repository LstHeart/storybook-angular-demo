module.exports = {
  // stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  // stories: ['../src/app/components/**/*.stories.ts'],
  stories: [{
    directory: '../src/app/components',
    // 👇 The titlePrefix field will generate automatic titles for your stories
    titlePrefix: 'DS-Components',
    // 👇 Storybook will load all files that contain the stories extension
    files: '*.stories.*',
  }],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/angular",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
};
