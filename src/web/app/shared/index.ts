/**
 * Shared Module
 * Allows sharing of Components, Services & Vendor modules
 * across the Web Platform application.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import {

} from './components';

import {

} from './directives';

import {

} from './pipes';

import {

} from './services';

import {
  SharedPlatformModule
} from '../../../shared';

import {

} from './validators';

const ANGULAR2_MODULES = [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
];

const ASU_COMPONENTS = [

];

const ASU_DIRECTIVES = [

];

const ASU_PIPES = [

];

const ASU_SERVICES = [
  SharedPlatformModule
];

const ASU_VALIDATORS = [

];

@NgModule({
  declarations: [
    ...ASU_DIRECTIVES,
    ...ASU_COMPONENTS,
    ...ASU_PIPES
  ],
  imports: [
    ...ANGULAR2_MODULES
  ],
  providers: [
    RouterModule,
    ...ASU_SERVICES
  ],
  exports: [
    ...ANGULAR2_MODULES,
    ...ASU_DIRECTIVES,
    ...ASU_COMPONENTS,
    ...ASU_PIPES
  ]
})
export class SharedModule {
}
