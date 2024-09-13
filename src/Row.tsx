// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import React from "react";
import { StyledView, StyledViewProps } from "./StyledView.js";

export const Row = ({ style, ...props }: StyledViewProps) => (
  <StyledView row {...props} />
);
