import { v4 as uuidv4 } from "uuid";
import Meeting from "../../../models/app/Meeting.js";
import faker from "faker";
import mongoose from "mongoose";

export const index = async (req, res) => {
  const meetings = await Meeting.find();
  res.status(200).json(meetings);
};

export const store = async (req, res) => {
  const {
    taskId,
    createdBy,
    title,
    bookmark,
    status,
    date,
    time,
    duration,
    agenda,
  } = req.body;
  const newMeeting = new Meeting({
    id: uuidv4(),
    taskId,
    createdBy,
    title,
    bookmark,
    status,
    date,
    time,
    duration,
    agenda,
  });
  try {
    const savedMeeting = await newMeeting.save();
    res.status(201).json(savedMeeting);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  try {
    const getMeeting = await Meeting.find({ slug: req.params.slug });
    res.status(200).json(getMeeting);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = (req, res) => {
  res.send("update");
};

export const destroy = (req, res) => {
  res.send(`destroy`);
};

// Faker entries
export const fakerMeetings = (req, res) => {
  var title = faker.lorem.sentence();
  var createdBy = faker.random.alphaNumeric();
  var status = faker.datatype.number(8);
  var description = faker.lorem.paragraph();
  var repoLink = faker.internet.url();
  var urlOne = faker.internet.url();
  var urlTwo = faker.internet.url();
  var color = faker.internet.color();
  var image = faker.image.imageUrl();
  for (var i = 0; i < 3; i++) {
    var fakeMeeting = new Issue({
      title,
      slug: uuidv4(),
      createdBy,
      status,
      description,
      repoLink,
      urlOne,
      urlTwo,
      color,
      image,
    });
    fakeMeeting.save((err, data) => {
      if (err) {
        console.log(err);
      }
    });
  }

  res.send("faker meetings");
};
