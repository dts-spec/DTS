const integrations = [
  "Salesforce", "HubSpot", "QuickBooks", "Google Analytics", "Stripe",
  "Slack", "Xero", "Mailchimp", "Zendesk", "Pipedrive",
  "NetSuite", "LinkedIn Ads", "Meta Ads", "Intercom", "Klaviyo", "GA4",
];

export default function VCROIntegrations() {
  return (
    <div className="overflow-hidden py-5 border-t border-b border-border">
      <div
        className="flex gap-14 w-max"
        style={{ animation: "marquee 50s linear infinite" }}
      >
        {[...integrations, ...integrations].map((name, i) => (
          <span
            key={i}
            className="text-sm font-medium text-muted-foreground/70 whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
