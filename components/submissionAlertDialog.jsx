import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function SubmissionAlertDialog({
  children,
  success,
  isDialogOpen,
  setInvoiceState,
  dialogMessage,
}) {
  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setInvoiceState}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className=" flex flex-col gap-4 md:gap-5 justify-center items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl">
              Generating Invoice {success}
            </span>
            {success === 0 ? (
              <div className="loader w-[50%] mx-auto"></div>
            ) : (
              <div className=" font-extralight">{dialogMessage}</div>
            )}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription></AlertDialogDescription>
        <AlertDialogFooter>
          {success === 0 ? (
            <div className="mx-auto">Please Wait</div>
          ) : (
            <AlertDialogAction className=" mx-auto">
              {success === 1 ? "Done" : "Try Again"}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
