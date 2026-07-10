import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "src/components/ui/checkbox";


export default function AddHostel() {
  const [step, setStep] = useState(1);

  const [hostelData, setHostelData] = useState({
    hostelName: "",
    description: "",
    university: "",
    hostelType: "",
    roomType: "",
     amenities: [],
    coverImage: null,
    galleryImages: [],
    county: "",
area: "",
mapLink: "",
  });

  const handleChange = (field, value) => {
    setHostelData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCoverImage = (e) => {
    handleChange("coverImage", e.target.files[0]);
  };

  const handleGalleryImages = (e) => {
    handleChange("galleryImages", Array.from(e.target.files));
  };

  const toggleAmenity = (amenity) => {
  setHostelData((prev) => ({
    ...prev,
    amenities: prev.amenities.includes(amenity)
      ? prev.amenities.filter((item) => item !== amenity)
      : [...prev.amenities, amenity],
  }));
};

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}

        <div className="mb-8">

          <h1 className="text-3xl font-bold text-blue-900">
            Add New Hostel
          </h1>

          <p className="text-gray-500 mt-2">
            Fill in the details below to create a new hostel listing.
          </p>

        </div>

        {/* ================= STEP 1 ================= */}

        {step === 1 && (
          <Card>

            <CardHeader>

              <CardTitle>
                Basic Information
              </CardTitle>

            </CardHeader>

            <CardContent className="space-y-6">

              <div>

                <Label>Hostel Name</Label>

                <Input
                  placeholder="e.g. Ruby Residence"
                  value={hostelData.hostelName}
                  onChange={(e) =>
                    handleChange("hostelName", e.target.value)
                  }
                />

              </div>

              <div>

                <Label>Description</Label>

                <Textarea
                  rows={5}
                  placeholder="Write a short description..."
                  value={hostelData.description}
                  onChange={(e) =>
                    handleChange("description", e.target.value)
                  }
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <Label>University</Label>

                  <Select
                    onValueChange={(value) =>
                      handleChange("university", value)
                    }
                  >

                    <SelectTrigger>

                      <SelectValue placeholder="Select University" />

                    </SelectTrigger>

                    <SelectContent>

                      <SelectItem value="MKU">
                        Mount Kenya University
                      </SelectItem>

                      <SelectItem value="JKUAT">
                        JKUAT
                      </SelectItem>

                      <SelectItem value="KU">
                        Kenyatta University
                      </SelectItem>

                      <SelectItem value="UON">
                        University of Nairobi
                      </SelectItem>

                    </SelectContent>

                  </Select>

                </div>

                <div>

                  <Label>Hostel Type</Label>

                  <Select
                    onValueChange={(value) =>
                      handleChange("hostelType", value)
                    }
                  >

                    <SelectTrigger>

                      <SelectValue placeholder="Select Hostel Type" />

                    </SelectTrigger>

                    <SelectContent>

                      <SelectItem value="Male">
                        Male
                      </SelectItem>

                      <SelectItem value="Female">
                        Female
                      </SelectItem>

                      <SelectItem value="Mixed">
                        Mixed
                      </SelectItem>

                    </SelectContent>

                  </Select>

                </div>

              </div>

              <div>

                <Label>Room Type</Label>

                <Select
                  onValueChange={(value) =>
                    handleChange("roomType", value)
                  }
                >

                  <SelectTrigger>

                    <SelectValue placeholder="Select Room Type" />

                  </SelectTrigger>

                  <SelectContent>

                    <SelectItem value="Single">
                      Single
                    </SelectItem>

                    <SelectItem value="Double">
                      Double
                    </SelectItem>

                    <SelectItem value="Bedsitter">
                      Bedsitter
                    </SelectItem>

                  </SelectContent>

                </Select>

              </div>

            </CardContent>

          </Card>
        )}
{step === 2 && (
  <Card>
    <CardHeader>
      <CardTitle>Hostel Photos</CardTitle>
    </CardHeader>

    <CardContent className="space-y-6">

      <div>
        <label className="block text-sm font-medium mb-2">
          Cover Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleCoverImage}
          className="w-full border rounded-md p-2"
        />

        {hostelData.coverImage && (
          <p className="text-sm text-green-600 mt-2">
            {hostelData.coverImage.name}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Gallery Images
        </label>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleGalleryImages}
          className="w-full border rounded-md p-2"
        />

        {hostelData.galleryImages.length > 0 && (
          <div className="mt-3 space-y-1">
            {hostelData.galleryImages.map((image, index) => (
              <p
                key={index}
                className="text-sm text-gray-600"
              >
                📷 {image.name}
              </p>
            ))}
          </div>
        )}
      </div>

    </CardContent>
  </Card>
)}
{step === 3 && (
  <Card>
    <CardHeader>
      <CardTitle>Location Details</CardTitle>
    </CardHeader>

    <CardContent className="space-y-6">

      <div>
        <Label>County</Label>
        <Input
          placeholder="e.g. Nairobi"
          value={hostelData.county || ""}
          onChange={(e) => handleChange("county", e.target.value)}
        />
      </div>

      <div>
        <Label>Area / Town</Label>
        <Input
          placeholder="e.g. Rongai"
          value={hostelData.area || ""}
          onChange={(e) => handleChange("area", e.target.value)}
        />
      </div>

      <div>
        <Label>Google Maps Link</Label>
        <Input
          placeholder="Paste Google Maps link"
          value={hostelData.mapLink || ""}
          onChange={(e) => handleChange("mapLink", e.target.value)}
        />
      </div>

    </CardContent>
  </Card>
)}
{step === 4 && (
  <Card>
    <CardHeader>
      <CardTitle>Amenities</CardTitle>
    </CardHeader>

    <CardContent>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {[
          "WiFi",
          "Water",
          "Electricity",
          "Security",
          "Parking",
          "Laundry",
          "Kitchen",
          "CCTV",
          "Study Area",
          "Hot Shower",
        ].map((amenity) => (

          <div
            key={amenity}
            className="flex items-center space-x-2"
          >

            <Checkbox
              checked={hostelData.amenities.includes(amenity)}
              onCheckedChange={() => toggleAmenity(amenity)}
            />

            <Label>{amenity}</Label>

          </div>

        ))}

      </div>

    </CardContent>
  </Card>
)}
         </div>
         <div className="flex justify-between mt-8">
  <Button
    variant="outline"
    disabled={step === 1}
    onClick={() => setStep(step - 1)}
  >
    Previous
  </Button>

  <Button
    onClick={() => setStep(step + 1)}
  >
    Next
  </Button>
</div>
    </div>
    
  );
}