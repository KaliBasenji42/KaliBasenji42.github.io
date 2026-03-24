# Python file that converts ENDF GNDS data into JSON for decay data. Also produces Bateman Series  (in a JSON)

# KaliBasenji42's Website
# Copyright (C) 2025 KaliBasenji42

# This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; version 2 of the License.

# This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

# You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

# License: https://kalibasenji.xeroideas.org/LICENSE.md
# GPL v2: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
# KaliBasenji42's Github: https://github.com/KaliBasenji42

# Imports

import xmltodict
import json
import os

# Variables

xmlPath = 'ENDF-B-VIII.1-GNDS/decay/dec-092_U_235.endf.gnds.xml'
decayDataPath = 'decay.json'
batemanDataPath = 'bateman.json'

xmlData = ''
jsonData = ''

# Read XML

with open(xmlPath, 'r') as file:
    xmlData = file.read()

# Parse

parsed = xmltodict.parse(xmlData)

jsonData = json.dumps(parsed)

# Write JSON

with open(jsonPath, 'w') as file:
    file.write(jsonData)
