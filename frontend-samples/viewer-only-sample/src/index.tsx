/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import * as ReactDOM from "react-dom";
import "@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css";
import { IModelAppOptions, IModelConnection } from "@bentley/imodeljs-frontend";
import { App, GithubLink, SampleBaseApp, SampleContext, SampleUIProvider, ViewportAndNavigation } from "@bentley/frontend-sample-base";
import { Id64String } from "@bentley/bentleyjs-core";
import "@bentley/frontend-sample-base/src/SampleBase.scss";

// cSpell:ignore imodels

/** This file contains the user interface and main logic that is specific to this sample. */

/** React state of the Sample component */
interface SampleState {
  _placeholder: boolean; // This is here because lint doesn't like empty interfaces
}

/** A React component that renders the UI specific for this sample */
export class Sample extends React.Component<{}, SampleState> {

  /** This method is called as the app initializes.  This gives us a chance to supply options to
   * be passed to IModelApp.startup.
   */
  public static getIModelAppOptions(): IModelAppOptions {
    return {};
  }

  /** The sample's render method */
  public render() {
    return (
      <>
        { /* This is the ui specific for this sample.*/}
        <div className="sample-ui">
          <div>
            <span>Use the toolbar at the right to navigate the model.</span>
            <GithubLink linkTarget="https://github.com/imodeljs/imodeljs-samples/tree/master/frontend-samples/viewer-only-sample" />
          </div>
        </div>
      </>
    );
  }
}

/*
 * From here down is boiler plate common to all front-end samples.
 *********************************************************************************************/
/** React props for Sample container */
interface SampleProps {
  imodel: IModelConnection;
  viewDefinitionId: Id64String;
}

/** A React component that renders the UI for the sample */
export class SampleContainer extends React.Component<SampleProps> {

  /** The sample's render method */
  public render() {
    return (
      <>
        <ViewportAndNavigation imodel={this.props.imodel} viewDefinitionId={this.props.viewDefinitionId} />
        <Sample />
      </>
    );
  }
}

(async () => {
  // initialize the application
  const uiProvider: SampleUIProvider = { getSampleUI: (context: SampleContext) => < SampleContainer imodel={context.imodel} viewDefinitionId={context.viewDefinitionId} /> };
  await SampleBaseApp.startup(uiProvider, Sample.getIModelAppOptions());

  // when initialization is complete, render
  ReactDOM.render(
    <App />,
    document.getElementById("root") as HTMLElement,
  );
})(); // tslint:disable-line:no-floating-promises
