import addons, { makeDecorator } from '@storybook/addons';
export * from './box';

export const withModular = makeDecorator({
  name: 'withModular',
  parameterName: 'modular',
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { options, parameters }) => {
    console.log(options, parameters)
    const channel = addons.getChannel();
    channel.emit('hehe', parameters);
    return getStory(context);
  }
});
