const noteModel = require("../model/noteModel");

const createNote = async (req,res) =>{
    try{
     const {title,body,tags,color} = req.body;
     const newNote = await noteModel.create({
        title,body,
        tags,
        color,
        owner: req.user._id
     })
     res.status(201).json({message: "Note created successfully", note: newNote});
    }
    catch(err){
        res.status(500).json({message: "Server error", error: err.message});
    }
}

const getNotes = async (req,res) =>{
    try{
        const notes = await noteModel.find()
        res.status(200).json({
            message: "Notes retrieved successfully",
             notes});
    }
    catch(err){
        res.status(500).json({
            message: "Server error", 
            error: err.message});
    }
}

const getNotesById = async (req,res) =>{
    try{
        const {id} = req.params;
        const notes = await noteModel.findById(id);
        res.status(200).json({
            message: "Note retrieved successfully",
             notes});
    }
    catch(err){
        res.status(500).json({
            message: "Server error", 
            error: err.message});
    }
}

const updateNotesById = async (req,res) =>{
    try{
        const {id} = req.params;
        const notes = await noteModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            message: "Note updated successfully",
             notes});
    }
    catch(err){
        res.status(500).json({
            message: "Server error", 
            error: err.message});
    }
}
const deleteNotesById = async (req,res) =>{
    try{
        const {id} = req.params;
        const notes = await noteModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Note deleted successfully"});
    }
    catch(err){
        res.status(500).json({
            message: "Server error", 
            error: err.message});
    }
}

const archieveNotesById = async (req,res) =>{
    try{
        const {id} = req.params;
        const {archieve} = true;
        const notes = await noteModel.findByIdAndUpdate(id, { archieve }, { new: true });
        res.status(200).json({
            message: "Note updated successfully",
             notes});
    }
    catch(err){
        res.status(500).json({
            message: "Server error", 
            error: err.message});
    }
}
const unarchieveNotesById = async (req,res) =>{
    try{
        const {id} = req.params;
        const {archieve} = false;
        const notes = await noteModel.findByIdAndUpdate(id, { archieve }, { new: true });
        res.status(200).json({
            message: "Note updated successfully",
             notes});
    }
    catch(err){
        res.status(500).json({
            message: "Server error", 
            error: err.message});
    }
}

const softDeleteNotesById = async (req,res) =>{
    try{
        const {id} = req.params;
        const {isDeleted} = true;
        const notes = await noteModel.findByIdAndUpdate(id, { isDeleted }, { new: true });
        res.status(200).json({
            message: "Note soft deleted successfully",
             notes});
    }
    catch(err){
        res.status(500).json({
            message: "Server error", 
            error: err.message});
    }
}

module.exports ={
    createNote,
    getNotes,
    getNotesById,
    updateNotesById,
    deleteNotesById,
    archieveNotesById,
    unarchieveNotesById,
    softDeleteNotesById
}