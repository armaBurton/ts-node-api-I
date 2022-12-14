/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response, NextFunction } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";

/**
 * Router Definition
 */
export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items
itemsRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const items: Item[] = await ItemService.findAll();

      res.status(200).send(items);
    } catch (e: unknown) {
      next(e);
    }
  }
);

// GET items/:id
itemsRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const id: number = parseInt(req.params.id, 10);
    try {
      const item: Item = await ItemService.find(id);

      if (item) {
        return res.status(200).send(item);
      }

      res.status(404).send("item not found");
    } catch (e: unknown) {
      next(e);
    }
  }
);

// POST items
itemsRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const item: BaseItem = await req.body;
      const newItem = await ItemService.create(item);

      res.status(201).send(newItem);
    } catch (e: unknown) {
      next(e);
    }
  }
);

// PUT items/:id
itemsRouter.put(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const id: number = parseInt(req.params.id, 10);

    try {
      const itemUpdate: Item = req.body;
      const existingItem: Item = await ItemService.find(id);

      if (existingItem) {
        const updatedItem = await ItemService.update(id, itemUpdate);
        return res.status(200).json(updatedItem);
      }

      const newItem = await ItemService.create(itemUpdate);

      res.status(201).json(newItem);
    } catch (e: unknown) {
      next(e);
    }
  }
);
// DELETE items/:id
itemsRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await ItemService.remove(id);

      res.sendStatus(204);
    } catch (e: unknown) {
      next(e);
    }
  }
);
