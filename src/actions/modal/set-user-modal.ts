"use server";

import { Modal } from "@/interfaces/modalInterface";
import prisma from "@/lib/prisma";


export const setUserModal = async (reminder: Modal, userId: string) => {
  try {

    const newModal = await createOrReplaceModal( reminder, userId );

    return {
      ok: true,
      reminder: newModal,
    }

  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se pudo grabar el recordatorio",
    };
  }
};

const createOrReplaceModal = async (reminder: Modal, id: string) => {
  try {


    const storedReminder = await prisma.reminders.findUnique({
      where: { id },
    });

    const reminderToSave = {
      userId: id,
      title: reminder.title,
      date: reminder.date,
      theme: reminder.theme,
    };

    if (!storedReminder) {
      const newReminder = await prisma.reminders.create({
        data: reminderToSave,
      });

      return newReminder;
    }

    const updatedReminder = await prisma.reminders.update({
      where: { id },
      data: reminderToSave
    })

    return updatedReminder;



  } catch (error) {
    console.log(error);
    throw new Error("No se pudo grabar el recordatorio");
  }
};
