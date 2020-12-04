import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { DetailspaneComponent } from './detailspane.component';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { config, withDesign } from 'storybook-addon-designs'


// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/DetailsPane/Default',
  // The component related to the Stories
  component: DetailspaneComponent,
  decorators: [
    withDesign,
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [DetailspaneComponent],
      imports: [CommonModule],
    }),
    withKnobs,
  ],
};
// This creates a Story for the component
const Template: Story<DetailspaneComponent> = (args: DetailspaneComponent) => ({
  component: DetailspaneComponent,
  //template: `<sw-detailspane></sw-detailspane>`,
  props: args,
});


export const Default = Template.bind({});

Default.args = {
  title: 'DetailsPane',
};

Default.parameters = {
  design: {
     type: 'figma',
     url: 'https://www.figma.com/file/hlS7fIwzENZ5wIcXk8t8yH/swa-ds-local?node-id=84%3A1709'
  }
}
