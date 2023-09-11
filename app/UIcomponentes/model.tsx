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
} from "@/components/ui/alert-dialog"

import { BadgeInfo } from 'lucide-react'



const Model = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger><BadgeInfo /></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Info</AlertDialogTitle>
                    <AlertDialogDescription>
                        This is a real time reservation Data , RAPID API. Next Update will include : Round-Trip - Adults - Alerts
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>

                    <AlertDialogAction>Ok , GOT IT </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default Model