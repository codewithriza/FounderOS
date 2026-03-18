import {
  BarChart3,
  TrendingUp,
  Users,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { label: "Page Views", value: "124,892", change: "+14.2%", up: true },
  { label: "Unique Visitors", value: "45,231", change: "+8.1%", up: true },
  { label: "Bounce Rate", value: "32.4%", change: "-2.3%", up: false },
  { label: "Avg. Session", value: "4m 32s", change: "+12.5%", up: true },
];

const topPages = [
  { path: "/", views: "45,231", percentage: 36 },
  { path: "/pricing", views: "12,450", percentage: 10 },
  { path: "/blog/getting-started", views: "8,932", percentage: 7 },
  { path: "/dashboard", views: "6,721", percentage: 5 },
  { path: "/login", views: "4,512", percentage: 4 },
];

const trafficSources = [
  { source: "Organic Search", visits: "52,341", percentage: 42, color: "bg-primary" },
  { source: "Direct", visits: "31,204", percentage: 25, color: "bg-purple-500" },
  { source: "Social Media", visits: "18,723", percentage: 15, color: "bg-pink-500" },
  { source: "Referral", visits: "12,456", percentage: 10, color: "bg-blue-500" },
  { source: "Email", visits: "10,168", percentage: 8, color: "bg-green-500" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="mt-1 text-muted-foreground">
          Track your product metrics and user engagement.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </CardTitle>
              {metric.up ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingUp className="h-4 w-4 text-green-500" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className={`mt-1 flex items-center gap-1 text-xs ${metric.up ? "text-green-500" : "text-red-500"}`}>
                {metric.up ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : (
                  <ArrowDownRight className="h-3 w-3" />
                )}
                {metric.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Visitor Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Visitors (Last 30 Days)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-end gap-1">
              {[35, 45, 55, 40, 65, 50, 70, 60, 80, 55, 75, 85, 60, 90, 70, 95, 80, 75, 85, 90, 65, 80, 95, 70, 85, 90, 75, 88, 92, 85].map(
                (h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-primary/50 transition-all hover:bg-primary"
                    style={{ height: `${h}%` }}
                  />
                )
              )}
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>30 days ago</span>
              <span>Today</span>
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Traffic Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>{source.source}</span>
                    <span className="text-muted-foreground">{source.visits} ({source.percentage}%)</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className={`h-2 rounded-full ${source.color}`}
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Top Pages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topPages.map((page, i) => (
              <div key={page.path} className="flex items-center gap-4">
                <span className="w-6 text-sm font-medium text-muted-foreground">
                  {i + 1}
                </span>
                <span className="flex-1 text-sm font-mono">{page.path}</span>
                <span className="text-sm text-muted-foreground">{page.views}</span>
                <div className="w-24">
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-primary"
                      style={{ width: `${page.percentage * 2.5}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
