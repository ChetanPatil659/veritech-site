// import * as React from "react";
// import * as AccordionPrimitive from "@radix-ui/react-accordion";
// import { ChevronDown, Plus } from "lucide-react";

// import { cn } from "../../utils/cn.ts";

// const Accordion = AccordionPrimitive.Root;

// const AccordionItem = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Item>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
// >(({ className, ...props }, ref) => (
//   <AccordionPrimitive.Item
//     ref={ref}
//     className={cn("border-b", className)}
//     {...props}
//   />
// ));
// AccordionItem.displayName = "AccordionItem";

// const AccordionTrigger = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Trigger>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
// >(({ className, children, ...props }, ref) => (
//   <AccordionPrimitive.Header className="flex">
//     <AccordionPrimitive.Trigger
//       ref={ref}
//       className={cn(
//         "flex flex-1 items-center justify-between py-4 font-julius text-4xl font-medium transition-all hover:text-[#9747FF] text-left [&[data-state=open]>svg]:rotate-180",
//         className
//       )}
//       {...props}
//     >
//       {children}
//       <Plus className="md:text-lg lg:h-9 lg:w-9 md:h-5 md:w-5 shrink-0 text-muted-foreground transition-transform hover:text-[#9747FF] duration-200 data-[state=closed]:text-[#9747FF]" />
//     </AccordionPrimitive.Trigger>
//   </AccordionPrimitive.Header>
// ));
// AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// const AccordionContent = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
// >(({ className, children, ...props }, ref) => (
//   <AccordionPrimitive.Content
//     ref={ref}
//     className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
//     {...props}
//   >
//     <div className={cn("pb-4 pt-0", className)}>{children}</div>
//   </AccordionPrimitive.Content>
// ));
// AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };


import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "../../utils/cn";

// Remove unused ChevronDown import

const Accordion = AccordionPrimitive.Root;

interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  className?: string;
}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn("border-b", className)}
      {...restProps}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  className?: string;
  children: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>((props, ref) => {
  const { className, children, ...restProps } = props;
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-julius text-4xl font-medium transition-all hover:text-[#9747FF] text-left [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...restProps}
      >
        {children}
        <Plus className="md:text-lg lg:h-9 lg:w-9 md:h-5 md:w-5 shrink-0 text-muted-foreground transition-transform hover:text-[#9747FF] duration-200 data-[state=closed]:text-[#9747FF]" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  className?: string;
  children: React.ReactNode;
}

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>((props, ref) => {
  const { className, children, ...restProps } = props;
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...restProps}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
