import { Check, CreditCard, Zap, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const currentPlan = {
  name: "Pro",
  price: "$29/month",
  renewDate: "April 15, 2025",
  features: [
    "Unlimited AI Projects",
    "50,000 AI Credits/month",
    "Advanced Analytics",
    "Priority Support",
    "API Access",
    "Custom Integrations",
    "Team Collaboration",
  ],
};

const invoices = [
  { id: "INV-001", date: "Mar 15, 2025", amount: "$29.00", status: "Paid" },
  { id: "INV-002", date: "Feb 15, 2025", amount: "$29.00", status: "Paid" },
  { id: "INV-003", date: "Jan 15, 2025", amount: "$29.00", status: "Paid" },
  { id: "INV-004", date: "Dec 15, 2024", amount: "$29.00", status: "Paid" },
];

export default function BillingPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Billing</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your subscription and payment methods.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Current Plan */}
        <Card className="lg:col-span-2 border-primary/30">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Crown className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {currentPlan.name} Plan
                    <Badge variant="glow">Active</Badge>
                  </CardTitle>
                  <CardDescription>
                    {currentPlan.price} · Renews {currentPlan.renewDate}
                  </CardDescription>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Manage Subscription
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 sm:grid-cols-2">
              {currentPlan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <CreditCard className="h-5 w-5" />
              Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-12 items-center justify-center rounded bg-gradient-to-r from-blue-600 to-blue-400 text-[10px] font-bold text-white">
                  VISA
                </div>
                <div>
                  <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                  <p className="text-xs text-muted-foreground">Expires 12/26</p>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Update Payment Method
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Usage This Month
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>AI Credits</span>
                <span className="text-muted-foreground">32,450 / 50,000</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary" style={{ width: "65%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>API Calls</span>
                <span className="text-muted-foreground">8,234 / 25,000</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-purple-500" style={{ width: "33%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Storage</span>
                <span className="text-muted-foreground">2.4 GB / 10 GB</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-green-500" style={{ width: "24%" }} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Invoices */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between rounded-lg border border-border/50 p-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-muted-foreground">{invoice.id}</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span className="text-sm">{invoice.date}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{invoice.amount}</span>
                  <Badge variant="secondary" className="text-xs">{invoice.status}</Badge>
                  <Button variant="ghost" size="sm" className="gap-1 text-xs">
                    Download <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
