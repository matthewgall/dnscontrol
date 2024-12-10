D("eagleswell.com", REG_NONE, DnsProvider(DNS_CLOUDFLARE_EAGLESWELL),
    ALIAS("@", "eagleswell.pages.dev.", CF_PROXY_ON),
    CNAME("www", "eagleswell.pages.dev.", CF_PROXY_ON),
    // Google Apps
    GOOGLE_APPS_MX_RECORDS,
	CNAME("calendar", "ghs.google.com."),
	CNAME("docs", "ghs.google.com."),
	CNAME("mail", "ghs.google.com."),
	CNAME("staffnet", "ghs.google.com."),
	CNAME("start", "ghs.google.com."),
	TXT("google._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCD5OzfYKZESjkwUelPhCa/L2HVfEl+qGowcNgExn7HR1GEISfaiW6qbuOdBpkv/OVzNIoDM7RObZR+YEEE+cF7RUIoNotLZzoHxBZ9OJP9fUtJx4RbkPEBC8EWPmhh70gq6NAtNb1c9Gwwx+pVhYW87Vv4694Co+/n8q3NM7T1zQIDAQAB"),
    // DMARC
	TXT("_dmarc", "v=DMARC1;  p=reject; rua=mailto:20d4af884d5c47bd9c03b52274856978@dmarc-reports.cloudflare.net"),
	// SPF
	TXT("@", "v=spf1 include:_spf.google.com -all"),
);