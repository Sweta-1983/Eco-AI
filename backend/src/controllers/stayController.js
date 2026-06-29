const stays = [
  {
    id: "mussoorie-cedar-ridge",
    title: "Cedar Ridge Family Homestay",
    location: "Mussoorie",
    description: "A hillside family-run stay with valley views, home-cooked Garhwali meals, and guided village walks.",
    pricePerNight: 3200,
    rating: 4.9,
    ecoScore: 93,
    safetyScore: 90,
    communityImpactScore: 88,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Solar water heating", "Local meals", "Wi-Fi", "Guided walks"],
    category: "Family",
    verified: true,
  },
  {
    id: "rishikesh-ganga-courtyard",
    title: "Ganga Courtyard Stay",
    location: "Rishikesh",
    description: "A quiet courtyard homestay near the river with yoga mornings, reusable amenities, and local trail access.",
    pricePerNight: 2800,
    rating: 4.8,
    ecoScore: 90,
    safetyScore: 87,
    communityImpactScore: 86,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Yoga deck", "Filtered water", "Organic toiletries", "Trail guidance"],
    category: "Adventure",
    verified: true,
  },
  {
    id: "coorg-rainleaf-estate",
    title: "Rainleaf Coffee Estate",
    location: "Coorg",
    description: "A coffee estate homestay offering plantation walks, Kodava cuisine, rainwater harvesting, and birding routes.",
    pricePerNight: 3600,
    rating: 4.7,
    ecoScore: 92,
    safetyScore: 89,
    communityImpactScore: 91,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Estate walks", "Local breakfast", "Rainwater harvesting", "Parking"],
    category: "Food",
    verified: true,
  },
  {
    id: "manali-orchard-workstay",
    title: "Old Orchard Workstay",
    location: "Manali",
    description: "An apple orchard stay with mountain work corners, composting, and access to community-led nature walks.",
    pricePerNight: 4100,
    rating: 4.8,
    ecoScore: 87,
    safetyScore: 86,
    communityImpactScore: 83,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Workspace", "Orchard access", "Composting", "Mountain views"],
    category: "Workation",
    verified: true,
  },
  {
    id: "meghalaya-living-root-retreat",
    title: "Living Root Retreat",
    location: "Meghalaya",
    description: "A Khasi host-led stay near forest trails, built around low-waste meals and respectful cultural experiences.",
    pricePerNight: 3000,
    rating: 4.9,
    ecoScore: 95,
    safetyScore: 88,
    communityImpactScore: 94,
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Forest walks", "Local guides", "Low-waste meals", "Bonfire area"],
    category: "Nature",
    verified: true,
  },
  {
    id: "hampi-stone-trail-house",
    title: "Stone Trail Heritage House",
    location: "Hampi",
    description: "A heritage-style village home with bicycle rentals, local craft connections, and low-impact sightseeing support.",
    pricePerNight: 2600,
    rating: 4.6,
    ecoScore: 84,
    safetyScore: 85,
    communityImpactScore: 89,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Bicycle rentals", "Heritage guidance", "Local crafts", "Filtered water"],
    category: "Heritage",
    verified: true,
  },
  {
    id: "munnar-cardamom-valley",
    title: "Cardamom Valley Eco Home",
    location: "Munnar",
    description: "A spice garden homestay with terraced views, native planting, farm-to-table meals, and family-friendly rooms.",
    pricePerNight: 3400,
    rating: 4.8,
    ecoScore: 91,
    safetyScore: 90,
    communityImpactScore: 87,
    image: "https://images.unsplash.com/photo-1605538883669-825200433431?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Spice garden", "Family rooms", "Farm meals", "Laundry"],
    category: "Family",
    verified: true,
  },
  {
    id: "kasol-pine-river-lodge",
    title: "Pine River Community Lodge",
    location: "Kasol",
    description: "A riverside lodge run with local hosts, trek planning, waste segregation, and simple pinewood rooms.",
    pricePerNight: 2400,
    rating: 4.5,
    ecoScore: 86,
    safetyScore: 84,
    communityImpactScore: 90,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Trek planning", "Riverside seating", "Waste segregation", "Cafe"],
    category: "Adventure",
    verified: true,
  },
];

const createError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

const findStayIndex = (id) => stays.findIndex((stay) => stay.id === id);

const validateStay = ({ title, location, pricePerNight }) => {
  if (!title || !String(title).trim()) {
    return "Title is required";
  }

  if (!location || !String(location).trim()) {
    return "Location is required";
  }

  if (pricePerNight === undefined || pricePerNight === null || Number(pricePerNight) <= 0) {
    return "Price per night is required";
  }

  return null;
};

const slugify = (value) =>
  String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const getStays = (_req, res) => {
  res.status(200).json({
    success: true,
    count: stays.length,
    data: stays,
  });
};

export const getStayById = (req, res, next) => {
  const stay = stays.find((item) => item.id === req.params.id);

  if (!stay) {
    return next(createError("Homestay not found", 404));
  }

  return res.status(200).json({
    success: true,
    data: stay,
  });
};

export const createStay = (req, res, next) => {
  const validationMessage = validateStay(req.body);

  if (validationMessage) {
    return next(createError(validationMessage, 400));
  }

  const baseId = slugify(`${req.body.location}-${req.body.title}`);
  const id = stays.some((stay) => stay.id === baseId) ? `${baseId}-${Date.now()}` : baseId;

  const stay = {
    id,
    title: req.body.title.trim(),
    location: req.body.location.trim(),
    description: req.body.description?.trim() || "",
    pricePerNight: Number(req.body.pricePerNight),
    rating: Number(req.body.rating) || 0,
    ecoScore: Number(req.body.ecoScore) || 0,
    safetyScore: Number(req.body.safetyScore) || 0,
    communityImpactScore: Number(req.body.communityImpactScore) || 0,
    image: req.body.image || "",
    amenities: Array.isArray(req.body.amenities) ? req.body.amenities : [],
    category: req.body.category?.trim() || "Homestay",
    verified: Boolean(req.body.verified),
  };

  stays.push(stay);

  return res.status(201).json({
    success: true,
    data: stay,
  });
};

export const updateStay = (req, res, next) => {
  const stayIndex = findStayIndex(req.params.id);

  if (stayIndex === -1) {
    return next(createError("Homestay not found", 404));
  }

  const updatedStay = {
    ...stays[stayIndex],
    ...req.body,
    id: stays[stayIndex].id,
  };

  const validationMessage = validateStay(updatedStay);

  if (validationMessage) {
    return next(createError(validationMessage, 400));
  }

  updatedStay.pricePerNight = Number(updatedStay.pricePerNight);
  stays[stayIndex] = updatedStay;

  return res.status(200).json({
    success: true,
    data: updatedStay,
  });
};

export const deleteStay = (req, res, next) => {
  const stayIndex = findStayIndex(req.params.id);

  if (stayIndex === -1) {
    return next(createError("Homestay not found", 404));
  }

  stays.splice(stayIndex, 1);
  return res.status(204).send();
};

export const searchStays = (req, res) => {
  const query = String(req.query.q || "").trim().toLowerCase();
  const results = query
    ? stays.filter((stay) => [stay.title, stay.location, stay.category].some((value) => value.toLowerCase().includes(query)))
    : stays;

  res.status(200).json({
    success: true,
    count: results.length,
    data: results,
  });
};
