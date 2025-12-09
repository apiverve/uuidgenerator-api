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
        /// Number of UUIDs to generate (1-100, default: 1)
        /// Example: 5
        /// </summary>
        [JsonProperty("count")]
        public string Count { get; set; }

        /// <summary>
        /// UUID version (only version 4 currently supported, default: 4)
        /// Example: 4
        /// </summary>
        [JsonProperty("version")]
        public string Version { get; set; }

        /// <summary>
        /// Format: 'default', 'uppercase', or 'nohyphens' (default: default)
        /// Example: default
        /// </summary>
        [JsonProperty("format")]
        public string Format { get; set; }
    }
}
