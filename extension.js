/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

/* exported init */

'use strict';

const {St, Clutter} = imports.gi;
const Main = imports.ui.main;

let panelButton;

function init() {
  // create a button with "FingerID" text
  panelButton = new St.Bin({
    style_class: "panel-button",
  });
  let panelButtonText = new St.Label({
    text: "FingerID",
    y_align: Clutter.ActorAlign.CENTER
  });
  panelButton.set_child(panelButtonText);
}

function enable() {
  // add the button to the panel
  Main.panel._rightBox.insert_child_at_index(panelButton, 0);
}

function disable() {
  // remove the added button from panel
  Main.panel._rightBox.remove_child(panelButton);
}
