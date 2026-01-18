"use client";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoadingOverlayProps {
  open: boolean;
  title?: string;
  description?: string;
}

export function LoadingOverlay({
  open,
  title = "Loading",
  description,
}: LoadingOverlayProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div
        role="status"
        aria-live="polite"
        className={cn(
          "flex flex-col items-center gap-4 rounded-lg border bg-card px-8 py-6 shadow-lg"
        )}
      >
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <div className="text-center">
          <p className="text-sm font-medium">{title}</p>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
