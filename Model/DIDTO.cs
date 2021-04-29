using System.Xml.Serialization;
using System.Collections.Generic;

namespace DotnetAngularSample.Model
{
	public class DIDTO:IDIDTO
    {
		public ModelDTO modelDTO = new ModelDTO();

        public int ReturnId()
        {
            return modelDTO.Id + (modelDTO.Id > 0 ? 0 : modelDTO.Id);
        }
	}

    public class ModelDTO
    {
        public int Id { get; set; }
    }
}