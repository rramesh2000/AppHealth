using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Reflection.Metadata.Ecma335;
using System.Text;

namespace Domain
{
    public class App
    {
        public int AppId { get; set; }
        public string Name { get; set; }
        public string Endpoint { get; set; }
        public AppMethod Method { get; set; }
        public AppStatus Status { get; set; }
        public DateAndTime  LastSuccessDateTime { get; set; }
    }
}
