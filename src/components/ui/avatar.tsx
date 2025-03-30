
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"
import { User } from "lucide-react"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

// Define our own type that matches Radix UI's image loading status
type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & {
    onLoadingStatusChange?: (status: ImageLoadingStatus) => void;
  }
>(({ className, onLoadingStatusChange, ...props }, ref) => {
  const [status, setStatus] = React.useState<"loading" | "loaded" | "error">("loading")
  
  React.useEffect(() => {
    if (onLoadingStatusChange) {
      onLoadingStatusChange(status)
    }
  }, [status, onLoadingStatusChange])

  // Use our own defined type instead of referencing AvatarPrimitive.ImageLoadingStatus
  const handleLoadingStatusChange = (status: ImageLoadingStatus) => {
    setStatus(status === "idle" ? "loading" : status);
    
    if (onLoadingStatusChange) {
      onLoadingStatusChange(status);
    }
  };

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn("aspect-square h-full w-full object-cover", className)}
      onLoadingStatusChange={handleLoadingStatusChange}
      {...props}
    />
  )
})
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, children, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  >
    {children || <User className="h-5 w-5 text-muted-foreground" />}
  </AvatarPrimitive.Fallback>
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
