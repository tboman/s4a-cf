import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SelectionListExample } from '../examples/list/selection-list';
import { MiscOnboardingExample, MiscOnboardingExampleDialog } from '../examples/misc/onboarding/onboarding-example';
import { SimpleExpansionExample } from '../examples/expansion/simple-expansion';
import { MultiExpansionExample } from '../examples/expansion/multi-expansion';
import { TouchDatepickerExample } from '../examples/datepicker/touch-ui-datepicker';
import { StartViewDatepickerExample } from '../examples/datepicker/startat-datepicker';
import { MinMaxDatepickerExample } from '../examples/datepicker/min-max-validation-datepicker';
import { FilterDatepickerExample } from '../examples/datepicker/filter-validation-datepicker';
import { ApiDatepickerExample } from '../examples/datepicker/api-datepicker';
import { SimpleDatepickerExample } from '../examples/datepicker/simple-datepicker';
import { ExclusiveButtonToggleExample } from '../examples/button-toggle/exclusive-button-toggle';
import { IconMenuExample, IconMenuDialog } from '../examples/menu/icon-menu';
import { NestedMenuExample } from '../examples/menu/nested-menu';
import { SimpleMenuExample } from '../examples/menu/simple-menu';
import { AdvancedListExample, AdvancedListDialog } from '../examples/list/advanced-list';
import { SimpleButtonToggleExample } from '../examples/button-toggle/simple-button-toggle';
import { ConfigurableSlideToggleExample } from '../examples/slide-toggle/configurable-slide-toggle';
import { NavListExample } from '../examples/list/nav-list';
import { SimpleListExample } from '../examples/list/simple-list';
import { SimpleSlideToggleExample } from '../examples/slide-toggle/simple-slide-toggle';
import { ConfigurableDialogExample, ConfigurableDialog } from '../examples/dialog/configurable-dialog';
import { DialogResultExample, DialogResult } from '../examples/dialog/dialog-result';
import { CheckboxConfigurableExample } from '../examples/checkbox/configurable-checkbox';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

import { SimpleTooltipExample } from '../examples/tooltip/simple-tooltip';
import { ConfigurableTooltipExample } from '../examples/tooltip/configurable-tooltip';
import { SimpleCheckboxExample } from '../examples/checkbox/simple-checkbox';
import { ButtonOverviewExample } from '../examples/button/button-overview';
import { ButtonTypesExample } from '../examples/button/button-types';
import { ButtonNoRippleExample } from '../examples/button/button-noripple';
import { SimpleSnackBarExample } from '../examples/snack-bar/simple-snack-bar';
import { ConfigurableSnackBarExample } from '../examples/snack-bar/snack-bar-configurable';
import { SimpleRippleExample } from '../examples/ripple/simple-ripple';
import { IconSVGExample } from '../examples/icon/icon-svg';
import { IconButtonExample } from '../examples/icon/icon-button';
import { SimpleIconExample } from '../examples/icon/icon-overview';
import { PseudoCheckboxExample } from '../examples/checkbox/pseudo-checkbox';
import { FormFieldInAFormExample } from '../examples/form-field/form-field-in-a-form';
import { SimpleFormFieldExample } from '../examples/form-field/simple-form-field';
const BUTTON_COMPONENTS = [
  ButtonNoRippleExample,
  ButtonTypesExample,
  ButtonOverviewExample
];
const BUTTON_TOGGLE_COMPONENTS = [
  SimpleButtonToggleExample,
  ExclusiveButtonToggleExample
];
const CHECKBOX_COMPONENTS = [
  SimpleCheckboxExample,
  CheckboxConfigurableExample,
  PseudoCheckboxExample
];
const DATEPICKER_COMPONENTS = [
  ApiDatepickerExample,
  FilterDatepickerExample,
  MinMaxDatepickerExample,
  SimpleDatepickerExample,
  StartViewDatepickerExample,
  TouchDatepickerExample
];
const DIALOG_COMPONENTS = [
  DialogResultExample,
  DialogResult,
  ConfigurableDialogExample,
  ConfigurableDialog
];
const EXPANSION_COMPONENTS = [
  MultiExpansionExample,
  SimpleExpansionExample
]
const FORM_FIELD_COMPONENTS = [
  SimpleFormFieldExample,
  FormFieldInAFormExample
]
const ICON_COMPONENTS = [
  SimpleIconExample,
  IconButtonExample,
  IconSVGExample
];
const LIST_COMPONENTS = [
  SimpleListExample,
  NavListExample,
  AdvancedListExample,
  AdvancedListDialog,
  SelectionListExample
];
const MENU_COMPONENTS = [
  SimpleMenuExample,
  NestedMenuExample,
  IconMenuExample,
  IconMenuDialog
];
const RIPPLE_COMPONENTS = [
  SimpleRippleExample
]
const SLIDE_TOGGLE_COMPONENTS = [
  SimpleSlideToggleExample,
  ConfigurableSlideToggleExample
];
const SNACK_BAR_COMPONENTS = [
  SimpleSnackBarExample,
  ConfigurableSnackBarExample
]
const TOOLTIP_COMPONENTS = [
  ConfigurableTooltipExample,
  SimpleTooltipExample
];
const MISC_COMPONENTS = [
  MiscOnboardingExample,
  MiscOnboardingExampleDialog
];
export const EXAMPLE_COMPONENTS = [
  BUTTON_COMPONENTS,
  BUTTON_TOGGLE_COMPONENTS,
  CHECKBOX_COMPONENTS,
  DATEPICKER_COMPONENTS,
  DIALOG_COMPONENTS,
  EXPANSION_COMPONENTS,
  FORM_FIELD_COMPONENTS,
  ICON_COMPONENTS,
  LIST_COMPONENTS,
  MENU_COMPONENTS,
  RIPPLE_COMPONENTS,
  SLIDE_TOGGLE_COMPONENTS,
  SNACK_BAR_COMPONENTS,
  TOOLTIP_COMPONENTS,
  MISC_COMPONENTS
];
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    EXAMPLE_COMPONENTS
  ],
  exports: [
    EXAMPLE_COMPONENTS
  ],
  entryComponents: [
    EXAMPLE_COMPONENTS
  ]
})
export class ExampleModule { }