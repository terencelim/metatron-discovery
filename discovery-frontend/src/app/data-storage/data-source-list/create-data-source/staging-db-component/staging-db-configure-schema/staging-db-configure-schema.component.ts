/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AbstractPopupComponent } from '../../../../../common/component/abstract-popup.component';
import {
  Component, ElementRef, EventEmitter, Injector, Input, OnDestroy, OnInit, Output, ViewChild
} from '@angular/core';
import { DatasourceInfo } from '../../../../../domain/datasource/datasource';
import { SchemaConfigComponent } from '../../../../component/schema-config/schema-config.component';

@Component({
  selector: 'staging-db-configure-schema',
  templateUrl: './staging-db-configure-schema.component.html'
})
export class StagingDbConfigureSchemaComponent extends AbstractPopupComponent implements OnInit, OnDestroy {

  @ViewChild(SchemaConfigComponent)
  private _schemaConfigComponent: SchemaConfigComponent;

  // 생성될 데이터소스 정보
  @Input('sourceData')
  public sourceData: DatasourceInfo;

  @Input()
  public step: string;

  @Output()
  public stepChange: EventEmitter<string> = new EventEmitter();

  // 생성자
  constructor(protected element: ElementRef,
              protected injector: Injector) {
    super(element, injector);
  }

  // Init
  public ngOnInit() {
    // Init
    super.ngOnInit();
  }

  // Destory
  public ngOnDestroy() {
    // Destory
    super.ngOnDestroy();
  }

  /**
   * Move to previous page
   * @private
   */
  private _moveToPrevPage() {
    this.step = 'staging-db-select';
    this.stepChange.emit(this.step);
  }

  /**
   * Move to next page
   * @private
   */
  private _moveToNextPage() {
    this.step = 'staging-db-ingestion';
    this.stepChange.emit(this.step);
  }

  /**
   * Step change click event
   * @param {string} route
   */
  public onClickPageChange(route: string): void {
    route === 'prev' ? this._schemaConfigComponent.onClickPrev() : this._schemaConfigComponent.onClickNext();
  }

  /**
   * Changed step
   * @param {string} route
   */
  public onChangedStep(route: string): void {
    route === 'prev' ? this._moveToPrevPage() : this._moveToNextPage();
  }
}
