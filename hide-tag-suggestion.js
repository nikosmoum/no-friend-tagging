/**
* Copyright (C) 2018  Nikos Moumoulidis

* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public License
* as published by the Free Software Foundation; either version 2
* of the License, or (at your option) any later version.

* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.

* You should have received a copy of the GNU General Public License
* along with this program; if not, see 
* https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt
*/


var checkDOMAndCull = function() {
    // check all elements periodically, and remove
    // facebook's 'Choose friends to tag' popups.
    var suggestionNodes = document.getElementsByClassName("_3ho0");
    for (var i = 0; i < suggestionNodes.length; i++) {
        suggestionNodes[i].parentNode.removeChild(suggestionNodes[i]);
    }
    setTimeout(checkDOMAndCull, 200);
}

checkDOMAndCull();
