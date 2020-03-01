import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SelectionListExample } from './examples/list/selection-list';
import { MiscOnboardingExample } from './examples/misc/onboarding/onboarding-example';
import { SimpleExpansionExample } from './examples/expansion/simple-expansion';
import { MultiExpansionExample } from './examples/expansion/multi-expansion';
import { TouchDatepickerExample } from './examples/datepicker/touch-ui-datepicker';
import { StartViewDatepickerExample } from './examples/datepicker/startat-datepicker';
import { MinMaxDatepickerExample } from './examples/datepicker/min-max-validation-datepicker';
import { FilterDatepickerExample } from './examples/datepicker/filter-validation-datepicker';
import { ApiDatepickerExample } from './examples/datepicker/api-datepicker';
import { SimpleDatepickerExample } from './examples/datepicker/simple-datepicker';
import { ExclusiveButtonToggleExample } from './examples/button-toggle/exclusive-button-toggle';
import { IconMenuExample } from './examples/menu/icon-menu';
import { NestedMenuExample } from './examples/menu/nested-menu';
import { SimpleMenuExample } from './examples/menu/simple-menu';
import { AdvancedListExample } from './examples/list/advanced-list';
import { SimpleButtonToggleExample } from './examples/button-toggle/simple-button-toggle';
import { ConfigurableSlideToggleExample } from './examples/slide-toggle/configurable-slide-toggle';
import { NavListExample } from './examples/list/nav-list';
import { SimpleListExample } from './examples/list/simple-list';
import { SimpleSlideToggleExample } from './examples/slide-toggle/simple-slide-toggle';
import { ConfigurableDialogExample } from './examples/dialog/configurable-dialog';
import { DialogResultExample } from './examples/dialog/dialog-result';
import { CheckboxConfigurableExample } from './examples/checkbox/configurable-checkbox';
import { SimpleTooltipExample } from './examples/tooltip/simple-tooltip';
import { ConfigurableTooltipExample } from './examples/tooltip/configurable-tooltip';
import { SimpleCheckboxExample } from './examples/checkbox/simple-checkbox';
import { ButtonOverviewExample } from './examples/button/button-overview';
import { ButtonTypesExample } from './examples/button/button-types';
import { ButtonNoRippleExample } from './examples/button/button-noripple';
import { SimpleSnackBarExample } from './examples/snack-bar/simple-snack-bar';
import { ConfigurableSnackBarExample } from './examples/snack-bar/snack-bar-configurable';
import { SimpleRippleExample } from './examples/ripple/simple-ripple';
import { IconSVGExample } from './examples/icon/icon-svg';
import { IconButtonExample } from './examples/icon/icon-button';
import { SimpleIconExample } from './examples/icon/icon-overview';
import { PseudoCheckboxExample } from './examples/checkbox/pseudo-checkbox';
import { FormFieldInAFormExample } from './examples/form-field/form-field-in-a-form';
import { SimpleFormFieldExample } from './examples/form-field/simple-form-field';
import { AfricaGuide } from './guides/africa/africa';
import { WestGuide } from './guides/west/west';
import { PublicComponent2 } from './app/public.component';
import { HomeComponent } from './app/home.component';
import { AboutComponent } from './app/about.component';
const BUTTON_ROUTES: Route[] = [
  { path: 'button-overview', component: ButtonOverviewExample },
  { path: 'button-types', component: ButtonTypesExample },
  { path: 'button-noripple', component: ButtonNoRippleExample }
];
const BUTTON_TOGGLE_ROUTES: Route[] = [
  { path: 'button-toggle-overview', component: SimpleButtonToggleExample },
  { path: 'button-toggle-exclusive', component: ExclusiveButtonToggleExample }];
const CHECKBOX_ROUTES: Route[] = [
  { path: 'checkbox-overview', component: SimpleCheckboxExample },
  { path: 'checkbox-configurable', component: CheckboxConfigurableExample },
  { path: 'pseudo-checkbox', component: PseudoCheckboxExample }
];
const DATEPICKER_ROUTES: Route[] = [
  { path: 'datepicker-api', component: ApiDatepickerExample },
  { path: 'datepicker-filter', component: FilterDatepickerExample },
  { path: 'datepicker-min-max', component: MinMaxDatepickerExample },
  { path: 'datepicker-overview', component: SimpleDatepickerExample },
  { path: 'datepicker-startat', component: StartViewDatepickerExample },
  { path: 'datepicker-touchui', component: TouchDatepickerExample }
]
const DIALOG_ROUTES: Route[] = [
  { path: 'dialog-result', component: DialogResultExample },
  { path: 'dialog-configurable', component: ConfigurableDialogExample }
]
const EXPANSION_ROUTES: Route[] = [
  { path: 'expansion-overview', component: SimpleExpansionExample },
  { path: 'multi-expansion', component: MultiExpansionExample }
]
const FORM_FIELD_ROUTES: Route[] = [
  { path: 'simple-form-field', component: SimpleFormFieldExample },
  { path: 'form-field-in-a-form', component: FormFieldInAFormExample }
]
const ICON_ROUTES: Route[] = [
  { path: 'icon-overview', component: SimpleIconExample },
  { path: 'icon-svg', component: IconSVGExample },
  { path: 'icon-button', component: IconButtonExample }
]
const LIST_ROUTES: Route[] = [
  { path: 'simple-list', component: SimpleListExample },
  { path: 'list-nav', component: NavListExample },
  { path: 'list-selection', component: SelectionListExample },
  { path: 'list-advanced', component: AdvancedListExample },
  { path: 'list-overview', redirectTo: 'simple-list' }
]
const MENU_ROUTES: Route[] = [
  { path: 'simple-menu', component: SimpleMenuExample },
  { path: 'menu-nested', component: NestedMenuExample },
  { path: 'menu-icon', component: IconMenuExample },
  { path: 'menu-overview', redirectTo: 'simple-menu' }
]
const MISC_ONBOARDING_ROUTES: Route[] = [
  { path: 'example', component: MiscOnboardingExample }
]
const MISC_ROUTES: Route[] = [
  { path: 'onboarding', children: MISC_ONBOARDING_ROUTES }
]
const RIPPLE_ROUTES: Route[] = [
  { path: 'ripple-overview', component: SimpleRippleExample }
]
const SNACK_BAR_ROUTES: Route[] = [
  { path: 'snack-bar-overview', component: SimpleSnackBarExample },
  { path: 'snack-bar-configurable', component: ConfigurableSnackBarExample }
]
const SLIDE_TOGGLE_ROUTES: Route[] = [
  { path: 'slide-toggle-overview', component: SimpleSlideToggleExample },
  { path: 'slide-toggle-configurable', component: ConfigurableSlideToggleExample }
]
const TOOLTIP_ROUTES: Route[] = [
  { path: 'tooltip-overview', component: SimpleTooltipExample },
  { path: 'tooltip-configurable', component: ConfigurableTooltipExample }
]
const GUIDE_ROUTES: Route[] = [
  { path: 'africa-guide', component: AfricaGuide },
  { path: 'west-guide', component: WestGuide }
]
const CDK_ROUTES: Route[] = [

]
const EXAMPLE_ROUTES: Routes = [
  { path: 'button', children: BUTTON_ROUTES },
  { path: 'button-toggle', children: BUTTON_TOGGLE_ROUTES },
  { path: 'checkbox', children: CHECKBOX_ROUTES },
  { path: 'datepicker', children: DATEPICKER_ROUTES },
  { path: 'dialog', children: DIALOG_ROUTES },
  { path: 'expansion', children: EXPANSION_ROUTES },
  { path: 'form-field', children: FORM_FIELD_ROUTES },
  { path: 'icon', children: ICON_ROUTES },
  { path: 'list', children: LIST_ROUTES },
  { path: 'menu', children: MENU_ROUTES },
  { path: 'misc', children: MISC_ROUTES },
  { path: 'ripple', children: RIPPLE_ROUTES },
  { path: 'snack-bar', children: SNACK_BAR_ROUTES },
  { path: 'slide-toggle', children: SLIDE_TOGGLE_ROUTES },
  { path: 'tooltip', children: TOOLTIP_ROUTES },
]
const ALL_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'public', component: PublicComponent2 },
  { path: 'components', children: EXAMPLE_ROUTES },
  { path: 'cdk', children: CDK_ROUTES },
  { path: 'guides', children: GUIDE_ROUTES },
  { path: '**', redirectTo: 'home' }
]
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(ALL_ROUTES);