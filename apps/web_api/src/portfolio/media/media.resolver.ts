import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaService } from './media.service';
import { Media } from './entities/media.entity';
import { CreateMediaInput } from './dto/create-media.input';
import { UpdateMediaInput } from './dto/update-media.input';
import { Types } from 'mongoose';
import { UseGuards } from '@nestjs/common';
import { GqlJwtAuthGuard } from '@/web_api/src/auth/guards/gql-jwt-auth-guard.service';

@Resolver(() => Media)
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {
  }

  @UseGuards(GqlJwtAuthGuard)
  @Mutation(() => Media)
  createMedia(@Args('createMediaInput') createMediaInput: CreateMediaInput) {
    return this.mediaService.create(createMediaInput);
  }

  @Query(() => [Media], { name: 'media' })
  findAll() {
    return this.mediaService.findAll();
  }

  @Query(() => Media, { name: 'media' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mediaService.findOne(id);
  }


  @UseGuards(GqlJwtAuthGuard)
  @Mutation(() => Media)
  updateMedia(@Args('updateMediaInput') updateMediaInput: UpdateMediaInput) {
    return this.mediaService.update(updateMediaInput.id, updateMediaInput);
  }

  @UseGuards(GqlJwtAuthGuard)
  @Mutation(() => Media)
  removeMedia(@Args('id', { type: () => Int }) id: Types.ObjectId) {
    return this.mediaService.remove(id);
  }
}
