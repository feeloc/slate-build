#!/usr/bin/env node

try {
  require('spm').plugin.uninstall('slate-build');
} catch(e) {}
