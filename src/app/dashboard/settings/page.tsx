"use client";

import { useState } from "react";
import { Save, User, Bell, Shield, Key, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    // Simulate save
    await new Promise((r) => setTimeout(r, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="mt-1 text-muted-foreground">
            Manage your account preferences.
          </p>
        </div>
        <Button onClick={handleSave} disabled={saving} className="gap-2">
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          {saved ? "Saved!" : "Save Changes"}
        </Button>
      </div>

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile
          </CardTitle>
          <CardDescription>Your public profile information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/60 to-purple-500/60" />
            <div>
              <Button variant="outline" size="sm">Change Avatar</Button>
              <p className="mt-1 text-xs text-muted-foreground">JPG, PNG or GIF. Max 2MB.</p>
            </div>
          </div>
          <Separator />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input defaultValue="Riza" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input defaultValue="riza@founderos.dev" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Company</label>
              <Input defaultValue="FounderOS" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Role</label>
              <Input defaultValue="Founder & Developer" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
          <CardDescription>Choose what you want to be notified about.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: "Product updates", description: "Get notified about new features and improvements", defaultChecked: true },
            { label: "Security alerts", description: "Important security notifications", defaultChecked: true },
            { label: "Usage alerts", description: "When you're approaching your plan limits", defaultChecked: true },
            { label: "Marketing emails", description: "Tips, tutorials, and community updates", defaultChecked: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-lg border border-border/50 p-4">
              <div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" defaultChecked={item.defaultChecked} className="peer sr-only" />
                <div className="h-6 w-11 rounded-full bg-muted peer-checked:bg-primary peer-focus:ring-2 peer-focus:ring-ring after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full" />
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* API Keys */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            API Keys
          </CardTitle>
          <CardDescription>Manage your API keys for external integrations.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-border/50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Production Key</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">sk_live_••••••••••••••••••••••••</p>
              </div>
              <Button variant="outline" size="sm">Reveal</Button>
            </div>
          </div>
          <div className="rounded-lg border border-border/50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Test Key</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">sk_test_••••••••••••••••••••••••</p>
              </div>
              <Button variant="outline" size="sm">Reveal</Button>
            </div>
          </div>
          <Button variant="outline" size="sm">Generate New Key</Button>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <Shield className="h-5 w-5" />
            Danger Zone
          </CardTitle>
          <CardDescription>Irreversible actions for your account.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Delete Account</p>
            <p className="text-xs text-muted-foreground">
              Permanently delete your account and all associated data.
            </p>
          </div>
          <Button variant="destructive" size="sm">
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
