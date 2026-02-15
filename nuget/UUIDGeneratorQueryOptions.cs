using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.UUIDGenerator
{
    /// <summary>
    /// Query options for the UUID Generator API
    /// </summary>
    public class UUIDGeneratorQueryOptions
    {
        /// <summary>
        /// Number of UUIDs to generate
        /// </summary>
        [JsonProperty("count")]
        public string Count { get; set; }

        /// <summary>
        /// UUID version (only version 4 currently supported)
        /// </summary>
        [JsonProperty("version")]
        public string Version { get; set; }

        /// <summary>
        /// Output format
        /// </summary>
        [JsonProperty("format")]
        public string Format { get; set; }
    }
}
