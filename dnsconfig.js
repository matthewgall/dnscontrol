// @ts-check
/// <reference path="types-dnscontrol.d.ts" />

// Providers:
var REG_NONE = NewRegistrar("none");    // No registrar.
var DNS_BIND = NewDnsProvider("bind");  // ISC BIND.
require_glob('./global/providers', true);

// Functions
require_glob('./global/functions', false);

// Domains:
require_glob('./zones', true);