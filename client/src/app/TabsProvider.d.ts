/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import type { ComponentType as Component } from 'react';

export interface TabsProvider {
  getTabNames(): string[];

  createTabForFile(file: File): Tab;
  createEmptyTab(type: string): Tab;

  getComponent(tab: Tab): Component | Promise<Component>;
  getProvider: (tab: Tab) => Provider;
}

export interface Tab {
  file: File;
  id: string;
  name: string;
  title: string;
  type: 'bpmn' | 'dmn' | 'cmmn';
}

export interface File {
  name: string;
  contents: string;
  path: string;
}
