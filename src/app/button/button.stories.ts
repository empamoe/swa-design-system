// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';
import { config, withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  //argTypes: {
  //  backgroundColor: { control: 'color' },
  //},
  decorators: [withDesign]
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

Primary.parameters = {
  design: {
     type: 'figma',
     url: 'https://www.figma.com/file/hlS7fIwzENZ5wIcXk8t8yH/swa-ds-local?node-id=12%3A100'
  }
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};
