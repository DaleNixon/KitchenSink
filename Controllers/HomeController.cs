using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using KitchenSink.Models;

namespace KitchenSink.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public ActionResult Promise()
        {
            return View();
        }

        public JsonResult LongRunningTask()
        {
            var time = (new Random().Next(5, 20)) * 100;

            // Sleep for time seconds to simulate a long-running task
            System.Threading.Thread.Sleep(time);

            // 10% chance of this method throwing an exception
            if (new Random().Next(0, 10) == 5) {
                throw new TaskCanceledException("The task was cancelled by the system.");
            }

            // 50% chance of returning true for success
            return Json(new { Success = (time % 200 == 0) });
        }

        public JsonResult SecondLongRunningTask()
        {
            return LongRunningTask();
        }
    }
}
