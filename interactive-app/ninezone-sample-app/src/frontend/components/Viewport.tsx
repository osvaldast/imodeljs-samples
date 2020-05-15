/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import { viewWithUnifiedSelection } from "@bentley/presentation-components";
import { ViewportComponent, ViewportProps } from "@bentley/ui-components";

// create a HOC viewport component that supports unified selection
// tslint:disable-next-line:variable-name
const SimpleViewport = viewWithUnifiedSelection(ViewportComponent);

/** Viewport component for the viewer app */
export default function SimpleViewportComponent(props: ViewportProps) {
  return (
    <SimpleViewport
      viewportRef={props.viewportRef}
      imodel={props.imodel}
      viewDefinitionId={props.viewDefinitionId}
      viewState={props.viewState}
    />
  );
}
