using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Market_International
{
    public class DetailObject
    {
        public int id { get; set; }
        public int id_subcat { get; set; }
        public string title { get; set; }
        public string subtitle { get; set; }
        public string Desc1 { get; set; }
        public string Desc2 { get; set; }
        public DateTime created { get; set; }
        public string img1 { get; set; }
        public string img2 { get; set; }
        public string img3 { get; set; }
        public string img4 { get; set; }
        public string img5 { get; set; }
        public int ScreenImg { get; set; }
        public int show { get; set; }
        public int offer { get; set; }
        public string itemnum { get; set; }
        public decimal itemprice { get; set; }
    }
}