D("gallfamily.com", REG_NONE, DnsProvider(DNS_CLOUDFLARE_GALLFAMILY),
    CLOUDFLARE_DISCARD_RECORDS,
    CNAME("mail", "mail.cs.zohohost.com."),
    // SMTP2GO
    SMTP2GO_RECORDS,
    // Zoho
    ZOHO_MX_RECORDS,
    TXT("@", "zoho-verification=zmverify.zoho.com"),
	TXT("zoho._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCYs2u+u6jCCsSe0wo2GQlrt+agDoJHa0nOqBV9+STOzQs5n6lwnpCKE3zk15JtEds237bQ6nfJ1QG5HYXGHCAj+DMFUDVS24cE7tkQXpyQOLrajkr8lTDTCi4it8sxW002SXmGciTD2pFh2CCzMOT4/XOXdUmNGh7ZAz1zOXzvpwIDAQAB"),
    // DMARC
    TXT("_dmarc", "v=DMARC1; p=quarantine; rua=mailto:af991f091a284beeb8d267ce4bc4fb31@dmarc-reports.cloudflare.net"),
	// SPF
    TXT("@", "v=spf1 include:zoho.com -all"),
);