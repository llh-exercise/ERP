/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
package org.angboot.schedule;

import org.angboot.schedule.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;

public class ScheduleApplication {
   public static void main(String[] args) throws Exception {
      scheduleService.startServer();
   }

   @Autowired
   private static ScheduleService scheduleService;
}
